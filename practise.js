var YoutubeVideo = /** @class */ (function () {
    //Constructor
    function YoutubeVideo() {
        var _this = this;
        this.allVideos = [];
        //List of constructor
        this.getAllVidoes = function () {
            return _this.allVideos;
        };
        //Add Video
        this.addVideo = function (vid, title, PublishedDate, category, related) {
            var data = {};
            data.videoid = vid;
            data.title = title;
            data.totalViews = 0;
            data.PublishedDate = PublishedDate;
            data.totalSubscriber = 0;
            data.totalLike = 0;
            data.totalDislike = 0;
            data.category = category;
            data.comments = [];
            data.realtedVideos = related;
            _this.allVideos.push(data);
        };
        this.getVideoById = function (id) {
            return _this.allVideos.filter(function (res) {
                if (res.videoid == id) {
                    return res;
                }
            });
        };
        this.getVideoByTitle = function (title) {
            return _this.allVideos.filter(function (res) {
                if (res.title == title) {
                    return res;
                }
            });
        };
        this.getViewsAttribute = function (id, attr) {
            var thisvideo = _this.allVideos.filter(function (res) {
                if (res.videoid == id) {
                    return res;
                }
            });
            return (thisvideo[0][attr]);
        };
        this.playVideo = function () {
            console.log("Play Video");
        };
        this.pauseVideo = function () {
            console.log("Pause Video");
        };
        this.addLikeVideo = function (id, times) {
            var thisvideo = _this.allVideos.map(function (res, index) {
                if (res.videoid == id) {
                    _this.allVideos[index].totalLike += times;
                }
            });
        };
        this.addDislikeVideo = function (id, times) {
            var thisvideo = _this.allVideos.map(function (res, index) {
                if (res.videoid == id) {
                    _this.allVideos[index].totalDislike += times;
                }
            });
        };
        this.addComments = function (id, comment) {
            var thisvideo = _this.allVideos.map(function (res, index) {
                if (res.videoid == id) {
                    _this.allVideos[index].comments.push(comment);
                }
            });
        };
    }
    return YoutubeVideo;
}());
var video = new YoutubeVideo();
video.addVideo(12, "Hello", '2018-08-10', "test", 22);
video.addVideo(22, "Hello 1", '2018-08-10', "test");
video.addVideo(323, "Hello 2", '2018-08-10', "test");
video.addVideo(423, "Hello 3", '2018-08-10', "test");
video.addComments(12, "hi Ashish");
video.addComments(12, "hi somesh");
video.addDislikeVideo(12, 6);
video.addLikeVideo(12, 2);
var totaldislike = video.getViewsAttribute(12, 'title');
console.log(totaldislike);
var listedvideos = video.getAllVidoes();
console.log(listedvideos);
