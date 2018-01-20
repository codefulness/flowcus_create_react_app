# Authentication service
This service is meant to be use with `redux-saga`
it watches to several actions using `takeLatest` side effect,
and performs the remote async request to the authentication
service, in this case Fireabse.

## Watchers
`SIGN_IN_WITH_FACEBOOK_REQUEST`:
  - SIGN_IN_WITH_FACEBOOK_ERROR
  - SIGN_IN_WITH_FACEBOOK_CANCE
