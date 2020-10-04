const isLogin = ( user ) => {
    try {
        const userInfo = localStorage.getItem( user );
        return userInfo === null ? undefined : JSON.parse( userInfo );
    } catch( err ) {
        console.error( "Get state error: ", err );
    }
}

export default isLogin;