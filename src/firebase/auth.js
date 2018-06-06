import { auth } from './firebase'

export const onCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

export const onSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

export const onSignOut = () =>
  auth.signOut()

export const onPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email)

export const onPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password)
