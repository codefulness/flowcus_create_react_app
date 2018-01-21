import remoteActionFactory from '../actionFactory'

export default {
  signInWithFacebook: remoteActionFactory('SIGN_IN_WITH_FACEBOOK'),
  signInWithGoogle: remoteActionFactory('SIGN_IN_WITH_GOOGLE'),
  signInWithTwitter: remoteActionFactory('SIGN_IN_WITH_TWITTER'),
  signInWithGithub: remoteActionFactory('SIGN_IN_WITH_GITHUB'),
  signIn: remoteActionFactory('SING_IN'),
  signOut: remoteActionFactory('SIGN_OUT')
}