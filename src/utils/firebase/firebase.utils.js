import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyDcqSVsmSJfz8EUzOH-M_QmUIDChScYT2M",
    authDomain: "crwn-clothing-db-7e40c.firebaseapp.com",
    projectId: "crwn-clothing-db-7e40c",
    storageBucket: "crwn-clothing-db-7e40c.appspot.com",
    messagingSenderId: "385192004752",
    appId: "1:385192004752:web:c1b1e437c0efddaf5d1c15"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()

export const db = getFirestore()

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)

export const signInwithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

    if (!userAuth) {
        return
    }

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {

        const { displayName, email } = userAuth

        const createdAt = new Date()

        try {

            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })

        } catch (error) {

            console.log('Error creating the user', error)
        }
    }

    return userDocRef
}

export const createAuthUserWIthEmailAndPassword = async (email, password) => {

    if (!email || !password) {
        return
    }

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) {
        return
    }

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback)

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = collection(db, collectionKey)

    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())

        batch.set(docRef, object)
    })

    await batch.commit()
}

export const getCategoriesAndDocuments = async () => {

    const collectionRef = collection(db, 'categories')

    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {

        const { title, items } = docSnapshot.data()
        
        acc[title.toLowerCase()] = items

        return acc
    }, {})

    return categoryMap
}