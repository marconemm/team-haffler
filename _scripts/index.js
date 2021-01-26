//Declaring elements from HTML:
const numberOfMembers = Number(document.getElementById("numberOfMembers").value);
const groupSize = Number(document.getElementById("groupSize").value);
const btnHaffler = document.getElementById("btnHaffler");
const showResult = document.getElementById("showResult");

//Declaring variables:

//Declaring the constants:
const haffledGroupsList = [];
const membersList = [];

btnHaffler.addEventListener("click", e => {
    e.preventDefault();
    
    membersList.splice(0,numberOfMembers); // reset the "membersList"
    for (let i = 0; i < numberOfMembers; i++)
    membersList.push(i);
    
    const haffleMaxrepeat = Math.ceil(numberOfMembers/groupSize);
    // console.log(haffleMaxrepeat, typeof(haffleMaxrepeat));
    haffledGroupsList.splice(0, haffleMaxrepeat); // reset the "haffledGroupsList"

  //  for (let i = 0; i < haffleMaxrepeat; i++) {
           do {
               const haffledMembersList = [];
               const haffleList = [...membersList];
                do {
                    console.log("...");
                    const haffledMember = Math.round(Math.random() * numberOfMembers);
                    //Checks if the "haffledMember" is into "membersList":
                    const isValidMember = (haffleList.findIndex(element => element === haffledMember) > 0) ? true : false;
                    
                    if (isValidMember) {
                        console.log("válido");
                        haffledMembersList.push(haffledMember);
                        // console.log(haffledMembersList);
                        haffleList.splice(haffleList.indexOf(haffledMember), 1); // remove the haffled member from "membersList".
                        // console.log(membersList);
                    } else
                        console.log("inválido");
        
                } while (haffledMembersList.length < groupSize);

                haffledGroupsList.push(haffledMembersList);
                
            } while (haffledGroupsList.length < haffleMaxrepeat);
 //   }
    console.log(haffledGroupsList);

}); // btnHaffler.addEventListener
