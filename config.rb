page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

activate :autoprefixer
activate :sprockets
activate :directory_indexes
activate :relative_assets
set :relative_links, true


helpers do
  def is_page_active(page)
    current_page.path == page
  end
end
