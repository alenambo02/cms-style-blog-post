//comments for self
// this is where i will be doing the formate time/date thing
//reference activity 16-sessions for help if needed

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
}