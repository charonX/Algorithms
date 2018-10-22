function Node(element){
    this.element = element;
    this.next = null;
}

function DNode(element){
    this.element = element;
    this.next = null;
    this.prev = null;
}

// 带头链表
function LinkedList(){
    let that = this;
    that.head = null;
    that.find = find;
    that.insert = insert;
    that.delete = deleteElement;
    that.display = display;

    // 查找功能
    function find(item){
        return search(item).curNode || -1;
    }
    function search(element){
        let curNode = that.head;
        let prevNode = null;
        if(element){
            while(curNode && curNode.element !== element){
                prevNode = curNode;
                curNode = curNode.next;
            }
        }else{
            while(curNode.next !== null){
                prevNode = curNode;
                curNode = curNode.next;
            }
        }
        return {
            prevNode,
            curNode,
        };
    }
    function findLast(){
        return search().curNode;
    }
    function insert(NewElement, position){
        let element = new Node(NewElement);
        let curNode;
        if(!that.head){
            that.head = element;
            return;
        }
        if(!that.head.next){
            curNode = that.head
        }else if(position){
            curNode = that.find(position)
        }else{
            curNode = findLast()
        }

        element.next = curNode.next;
        curNode.next = element;
    }
    function deleteElement(element){
        let node = search(element)
        let curNode = node.curNode;
        let prevNode = node.prevNode;
        prevNode.next = curNode.next;
    }
    function display(){
        var currNode = that.head;
        while (currNode != null){
            console.log(currNode.element)
            currNode = currNode.next;
        }
    }
}


