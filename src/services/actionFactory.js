export default (type) => ({
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
    payload: (error) ? { error: { code: error.code, message: error.message }} : { }
  })
})
