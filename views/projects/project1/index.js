//--------------------------Linked List Functions----------------------------------------
var LinkedList = function(){
    this.head = null;
    this.size = 0;
    
    
    this.addToTail = function(v){
        var node = new Node(v);
        if(this.head === null){
            this.head = node;
            this.size++;
            return;
        }
        var current = this.head;
        while(current.next != null) {
            current = current.next;
        }
        current.next = node;
        this.size++;
    }
    
    
    this.addToHead = function(v){
        var node = new Node(v);
        if(this.head === null){
            this.head = node;
            this.size++;
            return;
        }
        var second = this.head;
        this.head = node;
        this.head.next = second;
        this.size++;
    }
    
    
    this.insertAtIndex = function(index, v){
        if(this.size < index){
            this.addToTail(v);
            return;
        }
        if(index === 0){
            this.addToHead(v);
            return;
        }
        
        var i = 0;
        var current = this.head;
        
        while(i < index -1){
            current = current.next;
            i++;
        }
        var node = new Node(v);
        node.next = current.next;
        current.next = node;
        this.size++;
    }
    
    
    this.print = function(){
        let output = "";
        let current = this.head;
        if(current === null){
            console.log("List is Empty!");
            return;
        }
        while(current != null){
            output += " -> "+current.value;
            current = current.next;
        }
        console.log(output);
    }
    
    this.deleteItem = function(v){
        let current = this.head;
        //if deleting first element
        if (current.value === v){
            this.head = current.next;
            return;
        }
        while(current.next.value != v){
            if(current.next.next === null){
                console.log("Value not found.");
                return;
            }
            current = current.next;
        }
        current.next = current.next.next;
    }
}

var Node = function(v) {
    this.value = v;
    this.next = null;
}

//Support functions.
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        console.log("Cleared!");
    }
}

function listToElem(ll) {
    let htmlStr = ``;
    let node = document.createElement("div");
    let node1 = document.createElement("h2");
    const visual = document.querySelector('.box');
    
    let curr = ll.head;
    
    while(curr != null){
        htmlStr = `<h3>${curr.value}</h3>`;
        node = document.createElement("div");
        node.innerHTML = htmlStr;
        node1 = document.createElement("h2");
        node1.innerHTML = "&#8594;";
        visual.appendChild(node);
        visual.appendChild(node1);
        curr = curr.next;
    }
}

function validNum(str){
        return !isNaN(str);
    };

/*------------------------------------Front End DOM------------------------------------*/
/*When the window loads it initializes a linked list and fills it with temp values.*/
window.addEventListener('load', () => {
    /*Initialize linked list*/
    var ll = new LinkedList();

    /*Fill list with elements*/
    for(let i = 0; i < 10; i+=1){
        ll.addToTail(i);
    }
    
    listToElem(ll);
    
    const buttons = document.querySelectorAll(".eachButton .btn");
    const visual = document.querySelector('.box');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', function(){
            const inputs = document.getElementsByClassName("input");
            let valid = false;
            console.log(index+" Clicked");
            
            //button press logic
            switch(index) {
                case 0:
                    ll = new LinkedList();
                    removeAllChildNodes(visual);
                    break;
                case 1: //insert head
                    if(validNum(inputs[0].value) && inputs[0].value !=""){
                        ll.addToHead(inputs[0].value);
                        removeAllChildNodes(visual);
                        listToElem(ll);
                        inputs[0].value = "";
                        break;
                    }
                    inputs[0].value = "";
                    break;
                case 2: //insert tail
                    if(validNum(inputs[1].value) && inputs[1].value != ""){
                        ll.addToTail(inputs[1].value);
                        removeAllChildNodes(visual);
                        listToElem(ll);
                        inputs[1].value = "";
                        break;
                    }
                    inputs[1].value = "";
                    break;
                case 3: //insert at index
                    if(validNum(inputs[3].value) && validNum(inputs[4].value) && inputs[3].value !="" && inputs[4].value !=""){
                        ll.insertAtIndex(inputs[3].value, inputs[4].value);
                        removeAllChildNodes(visual);
                        listToElem(ll);
                        inputs[3].value = "";
                        inputs[4].value = "";
                        break;
                    }
                    inputs[3].value = "";
                    inputs[4].value = "";
                    break;
                case 4: //delete value 
                    if(validNum(inputs[5].value) && inputs[5].value !=""){
                        ll.deleteItem(inputs[5].value);
                        removeAllChildNodes(visual);
                        listToElem(ll);
                        inputs[5].value = "";
                        break;
                    }
                    inputs[4].value = "";
                    break;
                default:
                    console.log("Please fill in the associated input fields.")
            }
        }); 
    });
});