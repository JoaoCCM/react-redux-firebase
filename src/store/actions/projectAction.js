export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project, //da pra fazer project.title ...
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        creatAt: new Date()
      })
      .then(() => dispatch({ type: "CREATE_PROJECT", project: project }))
      .catch(err => dispatch({ type: "CREATE_PROJECT_ERROR", err }));
  };
};
