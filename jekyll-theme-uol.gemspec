# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-uol"
  spec.version       = "0.0.8"
  spec.authors       = ["Peter Edwards"]
  spec.email         = ["p.l.edwards@leeds.ac.uk"]

  spec.summary       = "Jekyll theme based on the University of Leeds Design System"
  spec.homepage      = "https://uol-library.github.io/jekyll-theme-uol/"
  spec.license       = "GPL-3.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|pages|_data|_layouts|_includes|LICENSE|README\.md|_config\.yml| search\.json)!i) }

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/uol-library/jekyll-theme-uol/issues",
    "changelog_uri"     => "https://github.com/uol-library/jekyll-theme-uol/README.md",
    "documentation_uri" => "https://github.com/uol-library/jekyll-theme-uol/wiki",
    "homepage_uri"      => "https://uol-library.github.io/jekyll-theme-uol/",
    "mailing_list_uri"  => "",
    "source_code_uri"   => "https://github.com/uol-library/jekyll-theme-uol",
    "wiki_uri"          => "https://github.com/uol-library/jekyll-theme-uol/wiki"
  }
  spec.add_runtime_dependency "jekyll", "~> 3.9", ">= 3.9.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12", ">= 0.12"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6", ">= 2.6"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1", ">= 1.1.0"

end
