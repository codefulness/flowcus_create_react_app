# Flowcus

## 0 Create React app
We are going to create our boiler plate, the easier way
to get us started is to use [create-react-app](https://github.com/facebookincubator/create-react-app)  
To do so, we just need to run.  

```
npx create-react-app flowcus
```

## 1 Adding redux
After creating our app the next thing we want to do is,
to add redux libraries, we'll need to execute ...
```
npm i --save redux react-redux redux-logger
```
Then we need the following files
- initialState.js
- rootReducer.js
- configureStore.js
So that we can finally create a store in our index file.  

Finally we'll wrapp our App with `<Provider />` and provide  
the recently created store as store prop `store={store}.
See [Hello redux commit](https://github.com/codefulness/flowcus/pull/1)
to have a look the needed changes. 

