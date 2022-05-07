class AuthStorage {
    addUserCredentials(token, user_details) {
        localStorage.setItem(
            "user",
            JSON.stringify({ token, user_details }));
    }

    updateUserCredentials(user_details) {
        localStorage.setItem(
            "user",
            JSON.stringify({ token: this.getUserToken(), user_details })
        );
    }

    resetUser() {
        localStorage.removeItem("user");
    }

    getUserToken() {
        let token  = localStorage.getItem("token");
        return token;
    }

    getUserDetails() {
        let user_details  = this.getCurrentUser();
        return user_details || {};
    }

    getCurrentUser() {
        let user = localStorage.getItem("user");

        try {
            user = JSON.parse(user);

            return user || {};
        } catch (e) {
            return {};
        }
    }

    registerBrowser() {
        localStorage.setItem("agbedodo_sign_on", "true");
    }

    isRegistered() {
        return localStorage.getItem("agbedodo_sign_on") == "true";
    }
}

export const getUser = (field) => {
    const storage = new AuthStorage();

    const user = storage.getUserDetails();

    if (field) return user[field];

    return user;
};

export const isVta = (user) => {
    if (!user) user = getUser();

    return (user || {}).vta_status == "verified";
};

// getUser("user_id")

export const getUserToken = () => {
    const storage = new AuthStorage();

    const token = storage.getUserToken();

    return token;
};

export const maskPhoneNumber = (phone = "", maskPortion = 0.4, mask = "*") => {
    // we want to only show 40% of the phone
    const i = phone.length;
    const showable = i - Math.ceil(i * maskPortion);
    const prefixNum = Math.round(showable / 2);

    const prefix = phone.slice(0, prefixNum);
    const suffix = phone.slice(-(showable - prefixNum));

    let masked = "*";
    for (let count = 0; count < i - showable; count++) {
        masked += mask;
    }

    return `${prefix}${masked}${suffix}`;
};

export default AuthStorage;
