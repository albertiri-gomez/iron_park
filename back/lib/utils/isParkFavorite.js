const isParkFavorite = (user, parkId) => {
  let savedFavorite = false;
  if (user) {
    const favorites = Object.values(user.favorites);
    for (let favoriteId of favorites)
      if (favoriteId.equals(parkId)) savedFavorite = true;
  }
  return savedFavorite;
};

module.exports = isParkFavorite;
