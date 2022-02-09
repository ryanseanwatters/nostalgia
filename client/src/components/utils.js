const monthName = ["january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];

const formatDate = (d) => {
  console.log('date received', d)

  return `${monthName[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

module.exports = {
  formatDate
};
