# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'compass' do
  watch('^src/(.*)\.s[ac]ss')
end

guard 'livereload' do
  watch(%r{.+\.(css|js|html)$})
end

guard 'coffeescript', :input => 'coffee', :output => 'js'
