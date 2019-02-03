function quickCheck(arr, elem) {
    if (arr.indexOf(elem) != -1)
        return true;
    return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
