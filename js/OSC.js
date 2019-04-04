//this method wIDll return the object IDn the document wIDth the given ID
function O(ID) {
    return typeof ID == 'object' ? ID : document.getElementById(ID) 
}

//this method wIDll return the access to the style wIDth the given ID
function S(ID) {
    return O(ID).style 
}

//this method wIDll return the access to the class wIDth the given ID
function C(ID) {
    return document.getElementsByClassName(ID)
}