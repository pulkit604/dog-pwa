<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <h3>Enable Notifications</h3>
      <label class="switch">
        <input type="checkbox" v-model="value" @change="reqPermission()">
        <span class="slider round"></span>
      </label>
    </div>
    <span style="color:green; font-size: 20px">{{token}}</span>
  </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'App',
        components: {
        },
        data() {
            return {
                value: false,
                token: '',
            };
        },
        methods: {

    reqPermission () {
        firebase.messaging().requestPermission().then(() => {
                    console.log('Notification permission granted.')
                    this.getToken()
                }).catch((err) => {
                    console.log('Unable to get permission to notify.', err)
                })
            },
            getToken () {
                firebase.messaging().getToken().then((currentToken) => {
                    /*
                    if(firebase.firestore().
                    collection('device-tokens')
                        .where('key', '==', currentToken).get()
                        .then(el => {
                            if(el.size === 0) {
                                firebase.firestore().collection('device-tokens').add({key:currentToken})
                            }}))
                            */
                        console.log(currentToken);
                        this.token = currentToken;
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err)
                })
            },
        },
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
