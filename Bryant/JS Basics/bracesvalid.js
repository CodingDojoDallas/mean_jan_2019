function bracesvalid (x){
    stack = [];
    for (i = 0; i < x.length; i++) {
        if (x.charAt(i)=='('||x.charAt(i)=='['||x.charAt(i)=='{') {
            stack.push(x.charAt(i));
        }
        if (x.charAt(i) == ')' && stack.pop() != '(') {
            return false;
        }
        if (x.charAt(i) == ']' && stack.pop() != '[') {
            return false;
        }
        if (x.charAt(i) == '}' && stack.pop() != '{') {
            return false;
        }
    }
    if (stack.length == 0){
    	return true;
    }
 }