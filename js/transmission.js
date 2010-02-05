var sammy = new Sammy.Application(function() { with(this) {
  element_selector = '#container';
  cache_partials = true;
  rpc = new RPC();
  use(Sammy.Mustache);
  use(Sammy.Cache);
  
  helpers(TorrentHelpers);
  helpers(SortTorrentsHelpers);
  helpers(InfoHelpers);
  helpers(ViewHelpers);
  helpers(SettingHelpers);
  helpers(StatisticHelpers);
  
  Torrents(this);
  FilteredTorrents(this);
  Settings(this);
  Statistics(this);
  
  bind('flash', function(e, message) { with(this) {
    this.showAndHideFlash(message);
  }});
  
  bind('init', function() { with(this) {
    this.activateLinks();
  }});
}});
 
$(function() {
  sammy.run('#/torrents');
  sammy.trigger('init');
});