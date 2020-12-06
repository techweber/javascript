async function getUserDetail(){
	try{
		let users = await getUsers();
		return users[0].name;
	}catch(err){
		return {
			name: 'default user name'
		};
	}
}

getUserDetail();