const createUserWithCredits = async (userId, initialCredits) => {
  try {
    await db.collection("users").doc(userId).set({
      credits: initialCredits,
    });
    console.log("User created with initial credits");
  } catch (error) {
    console.error("Error creating user: ", error);
  }
};
