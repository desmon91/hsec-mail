import moment from "moment";
import Profile from "../models/Profile";
import { sendReminder } from "./sendReminder";

export const checkExpiredSimper = async () => {
  const allUser = await Profile.find({
    "simper.validDate": { $type: "date" },
  });

  allUser.map(async (user: any) => {
    const expiredDate = moment(user.simper.validDate);
    const today = moment();
    const sisaHari = expiredDate.diff(today, "days");

    if (sisaHari <= 30 && user.simper.reminderCount === 0) {
      try {
        await sendReminder(user.nama, user.email, user.simper.validDate);
        user.simper.reminderCount = 1;
        await user.save();
      } catch (error) {
        console.error(error);
      }
    }
    if (sisaHari <= 14 && user.simper.reminderCount === 1) {
      try {
        await sendReminder(user.nama, user.email, user.simper.validDate);
        user.simper.reminderCount = 2;
        await user.save();
      } catch (error) {
        console.error(error);
      }
    }
    if (sisaHari <= 0 && !user.simper.expired) {
      try {
        user.simper.expired = true;
        await user.save();
      } catch (error) {
        console.error(error);
      }
    }
  });
};
