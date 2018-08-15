class YoutubeVideo {
    public allVideos :any = [];
    //Constructor
    constructor() {}   
    
    //List of constructor
    getAllVidoes = () => {
        return this.allVideos;
    }

    //Add Video
    addVideo =(vid:number,title:string,PublishedDate: string,category:string,related?:any) => {
            let data :any = {};
            data.videoid = vid;
            data.title          = title;
            data.totalViews     = 0;
            data.PublishedDate  = PublishedDate;
            data.totalSubscriber    = 0;
            data.totalLike = 0;
            data.totalDislike = 0;
            data.category = category;
            data.comments = [];
            data.realtedVideos = related;
            this.allVideos.push(data);
    } 

    getVideoById = (id:number) =>{
     return this.allVideos.filter((res:any)=>{
            if(res.videoid == id)
            {
              return res;  
            }
        })
    } 

    getVideoByTitle = (title:string)=>{
        return this.allVideos.filter((res:any)=>{
            if(res.title ==title)
            {
              return res;  
            }
        })
    }

    getViewsAttribute = (id:number,attr: any)=>{
        var thisvideo =  this.allVideos.filter((res:any)=>{
            if(res.videoid ==id)
            {
              return res;  
            }
        })
        return (thisvideo[0][attr]);
    }

    playVideo = () =>{
        console.log("Play Video")
    }
    pauseVideo = () =>{
        console.log("Pause Video");
    }

    addLikeVideo = (id: number,times:number) =>{
        let thisvideo =    this.allVideos.map((res:any,index:number)=>{            
            if(res.videoid ==id)
            {
              this.allVideos[index].totalLike += times;
            }
        })
    }
    addDislikeVideo = (id: number,times:number) => {
        let thisvideo =    this.allVideos.map((res:any,index:number)=>{            
            if(res.videoid ==id)
            {
              this.allVideos[index].totalDislike += times;
            }
        })
    }
    addComments = (id: number,comment:string) => {
         let thisvideo =    this.allVideos.map((res:any,index:number)=>{            
                if(res.videoid ==id)
                {
                  this.allVideos[index].comments.push(comment)
                }
            })
    } 
}

    let video = new YoutubeVideo();
    
    video.addVideo(12,"Hello",'2018-08-10',"test",22);
    video.addVideo(22,"Hello 1",'2018-08-10',"test");
    video.addVideo(323,"Hello 2",'2018-08-10',"test");
    video.addVideo(423,"Hello 3",'2018-08-10',"test");
    video.addComments(12,"hi Ashish")
    video.addComments(12,"hi somesh")
    video.addDislikeVideo(12,6);
    video.addLikeVideo(12,2);
    let totaldislike = video.getViewsAttribute(12,'title')
    console.log(totaldislike);
    let listedvideos =   video.getAllVidoes();
     console.log(listedvideos);
    
   
 
