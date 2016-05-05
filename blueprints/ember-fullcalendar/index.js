module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('fullcalendar').then(function() {
      return this.addBowerPackageToProject('fullcalendar-scheduler').then(function() {
        return this.addAddonToProject('ember-cli-moment-shim', '0.6.2');
      });
    });
  }
};
