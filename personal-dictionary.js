//Fill in this empty file

//array

let words = [apple, banana, cantaloupe, grape, monkey, table, computer, dirt];

                                                                      
    // a linear search

    function otherSearch(needle, haystack){    
        let start = 0; 
        let end = haystack.length; 
        
        for (let i = start; i < end; i++) {
            if (needle == haystack[i]) {
                return true;
            }
        }
        return false;
    }