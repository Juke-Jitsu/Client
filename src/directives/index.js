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

var app = require("angular").module('Juke-Jitsu');
app.directive('jjQueue',                    require('./QueueDirective.js'));
app.directive('jjSidenavToggleButton',      require('./SidenavToggleDirective.js'));
app.directive('jjContent',                  require('./ContentDirective.js'));
app.directive('jjSearch',                   require('./SearchDirective.js'));
app.directive('jjSongListItem',             require('./SongListItemDirective.js'));
app.directive('jjSongView',                 require('./SongViewDirective.js'));
app.directive('jjSidebarNav',               require('./SidebarNavDirective.js'));
app.directive('jjSongOptions',              require('./SongAvailableOptionsDirective.js'));
app.directive('jjPage',                     require('./PageDirective.js'));
app.directive('jjGreetingMessage',          require('./GreetingMessageDirective.js'));
app.directive('jjNowPlaying',          require('./NowPlayingDirective.js'));
