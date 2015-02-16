module.exports = function(grunt){
    grunt.registerTask('showme-coverage', function() {
        var coverageDir = '/../test/unit/reports/coverage/'
            coverage = grunt.file.read(__dirname + coverageDir + 'text.txt'),
            coverageSummary = grunt.file.read(__dirname + coverageDir + 'text-summary.txt');
        grunt.log.write(coverage, coverageSummary);
    });
};