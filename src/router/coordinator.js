export const goToAboutUs = (history) => {
  history.push("/about")
}

export const goToApply = (history) => {
  history.push("/apply")
}

export const goToTrips = (history) => {
  history.push("/trips")
}

export const goToError = (history) => {
  history.push("/error")
}

export const goToDetails = (history, id) => {
  history.push(`/admin/trips/detail/${id}`);
}

export const goToCreateTrip = (history) => {
  history.push("/admin/trips/create")
}

export const goToAdmin = (history) => {
  history.push("/admin")
}

export const goToAdminTrips = (history) => {
  history.push("/admin/trips")
}

export const goToHome = (history) => {
  history.push("/")
}

export const goToLogin = (history) => {
  history.push("/login")
}

