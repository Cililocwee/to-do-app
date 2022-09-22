// hold the global variable that changes the profile mode for the different profiles

const currentProfile = {
    profilemode: 'personal',
    get ProfileMode() {return this.profilemode},
    set ProfileMode(value){ this.profilemode = value},
}

export default currentProfile;