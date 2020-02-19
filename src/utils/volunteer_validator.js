export const validate = vol => {
  console.log(vol);
  if (vol["Email"].trim() === "" || vol["Email"] === undefined) {
    console.log("bad Email");
    return false;
  }
  if (vol["DonationLink"].trim() === "" || vol["DonationLink"] === undefined) {
    console.log("bad Donation");
    return false;
  }
  if (vol["Address"].trim() === "" || vol["Address"] === undefined) {
    console.log("bad Address");
    return false;
  }

  if (
    vol["VolunteerForm"].trim() === "" ||
    vol["VolunteerForm"] === undefined
  ) {
    console.log("bad Volunteer");
    return false;
  }
  if (vol["Phone"].trim() === "" || vol["Phone"] === undefined) {
    console.log("bad phone");
    return false;
  }

  return true;
};
