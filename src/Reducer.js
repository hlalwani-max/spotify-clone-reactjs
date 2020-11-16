export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: "BQAKE_39OQACVq86DGTEQbNa-JStWLeE4VEKs-VR6BxeY_Rzq5…Z3V_VoOmK2Gf1949FER3cU-UL5Nb23hkOnHp16pfAYsoQ4Csh",
    spotify: null,
    playlists: null
};

const reducer = (state, action) => {
    // Action- (type, payload)
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            // copy all contents of state and update state's user value
            return {
                // rest same in state
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            };
        default:
            return state;
    }
}

export default reducer