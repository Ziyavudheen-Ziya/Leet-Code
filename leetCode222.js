


function TreeNode(val){

      this.val = val
      this.left = null
      this.right = null

}

function arrayToTree(arr){

    if(!arr.length)return null;

    let root = new TreeNode(arr[0])

    let queue = [root]
    let i =1
    while(i<arr.length){
   let curr = queue.shift()
         if(i<arr.length){

             curr.left = new TreeNode(arr[i++])
             queue.push(curr.left)
         }

         if(i<arr.length){

            curr.right = new TreeNode(arr[i++])
            queue.push(curr.right)
         }


    }
    return root

}
let rootArray  = [1, 2, 3, 4, 5, 6];
let root = arrayToTree(rootArray)


    if(!root){
        console.log(0);
        
      }else{

        
        let queue = [root]
        let length = 0
        while(queue.length>0){
          let  curr = queue.shift()
              length++;
             if(curr.left){
    
                queue.push(curr.left)
             }
    
             if(curr.right){
    
                 queue.push(curr.right)
             }
    
    
        }
    
        console.log(length);


      }



    
    
