module.exports = function(grunt){
    grunt.registerTask('showme-coverage', function() {
        var coverage = grunt.file.read(__dirname + '/../build/reports/coverage/text.txt'),
            coverageSummary = grunt.file.read(__dirname + '/../build/reports/coverage/text-summary.txt');
        grunt.log.write(coverage, coverageSummary);
    });
};