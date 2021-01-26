//Declaring elements from HTML:
const inputNumberOfMembers = document.getElementById("numberOfMembers");
const inputGroupSize = document.getElementById("groupSize");
const btnHaffler = document.getElementById("btnHaffler");
const showResult = document.getElementById("showResult");

//Declaring variables:
let haffleMaxrepeat = 0;
let groupSize = 0;

//Declaring the constants:
const haffledGroupsList = [];
const membersList = [];

const resetLists = () => {

    const numberOfMembers = Number(inputNumberOfMembers.value);
    groupSize = Number(inputGroupSize.value);

    membersList.splice(0,membersList.length); // reset the "membersList"
    for (let i = 0; i < numberOfMembers; i++)
    membersList.push(i);
    
    haffleMaxrepeat = Math.ceil(numberOfMembers/groupSize);
    // console.log(haffleMaxrepeat, typeof(haffleMaxrepeat));
    haffledGroupsList.splice(0, haffledGroupsList.length); // reset the "haffledGroupsList"

}; //resetLists()

btnHaffler.addEventListener("click", e => {
    
    resetLists();

    for (let i = 0; i < haffleMaxrepeat; i++) {
        
        // console.log("...");
        const haffledMembersList = [];
        
        do {
            const minRandom = Math.min(...membersList);
            const maxRandom = Math.max(...membersList);

            // Get a random number between "minRandom" and "maxRandom":
            const haffledMember = Math.round(Math.random() * ((maxRandom - minRandom) + minRandom));
            //Checks if the "haffledMember" is into "membersList":
            const isValidMember = membersList.some(member => member === haffledMember);
            
            if (isValidMember) {
                // console.log("Válido.");
                haffledMembersList.push(haffledMember);
                membersList.splice(membersList.indexOf(haffledMember), 1) // remove the haffled member from "membersList".
            }

        } while (membersList.length > 0 && haffledMembersList.length < groupSize );

        //Sort the "haffledMembersList" before push it into "haffledGroupsList":
        haffledMembersList.sort((memberA , memberB) => (memberA > memberB) ? 1 : (memberA < memberB) ? -1 : 0);
       
        haffledGroupsList.push(haffledMembersList);
    }       
    console.log(haffledGroupsList);

}); // btnHaffler.addEventListener


