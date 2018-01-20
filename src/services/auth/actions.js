const remoteActionFactory = (type) => ({
  request: (payload) => ({
    type: `${type}_REQUEST`,
    payload
  }),
  success: (payload) => ({
    type: `${type}_SUCCESS`,
    payload
  }),
  cancel: () => ({
    type: `${type}_CANCEL`,
  }),
  error: (error) => ({
    type: `${type}_ERROR`,
    payload: { error: { code: error.code, message: error.message }}
  })
})

export default {
  signInWithFacebook: remoteActionFactory('SIGN_IN_WITH_FACEBOOK'),
  signInWithGoogle: remoteActionFactory('SIGN_IN_WITH_GOOGLE'),
  signInWithTwitter: remoteActionFactory('SIGN_IN_WITH_TWITTER'),
  signInWithGithub: remoteActionFactory('SIGN_IN_WITH_GITHUB'),
}