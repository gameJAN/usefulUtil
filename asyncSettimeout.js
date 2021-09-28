function sleepTime(time){
    const sleep = Date.now() + time * 1000
    while(Date.now()<sleep){}
    return
}
sleepTime(4)