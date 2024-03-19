// Перетворити всі поштові адреси у нижній регістр.
let emailAddresses = ['JohnDoe@example.com', 'JaneSmith@Gmail.com', 'Alice123@yahoo.com'];
let lowerCaseEmails = [];

for (let i = 0; i < emailAddresses.length; i++) {
    lowerCaseEmails.push(emailAddresses[i].toLowerCase());
}

console.log(lowerCaseEmails);
