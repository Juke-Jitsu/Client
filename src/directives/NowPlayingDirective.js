/* 
 * The MIT License
 *
 * Copyright 2016 Eli Davis.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

module.exports = ContentDirective;

function ContentDirective(){
    return {
        'restrict': 'E',
        'templateUrl': 'partial/now-playing-directive.html',
        'controllerAs': 'currentelyPlaying',
        'controller': /*@ngInject*/ function ($scope, Server) {
            
            var self = this;

            var _defaultName = "Juke-Jitsu";
            var _defaultImageUrl = "img/circle/icon_512x512.png";

            self.songName = _defaultName;
            self.imageUrl = _defaultImageUrl;

            Server.getNowPlaying$().safeApply($scope, function(nowPlaying){
                if(nowPlaying){
                    self.songName = nowPlaying.title ?  nowPlaying.title : _defaultName;
                    self.imageUrl = nowPlaying.albumArtRef.length>0 ?  nowPlaying.albumArtRef[0].url : _defaultImageUrl;
                } else {
                    self.songName = _defaultName;
                    self.imageUrl = _defaultImageUrl;
                }
            }).subscribe();
            
        }
    };
}