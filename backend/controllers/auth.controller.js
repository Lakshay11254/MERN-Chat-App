export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
    }catch(error) {

    }
    res.send("signupUser");
    // console.log("signupUser");
};

export const login = (req, res) => {
    res.send("loginuser");
    // console.log("loginUser");
};
export const logout = (req, res) => {
    res.send("logoutUser");
    // console.log("logoutUser");
};  