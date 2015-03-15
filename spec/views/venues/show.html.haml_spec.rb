require 'rails_helper'

RSpec.describe "venues/show", type: :view do
  before(:each) do
    @venue = assign(:venue, Venue.create!(
      :facebook_id => 1,
      :category => "Category",
      :name => "Name",
      :image => "Image",
      :website_url => "Website Url",
      :address_one => "Address One",
      :address_two => "Address Two",
      :city => "City",
      :state => "State",
      :zip => 2,
      :phone_number => 3,
      :short_description => "MyText",
      :long_description => "MyText",
      :facebook => "MyText",
      :twitter => "MyText",
      :birthday_party_venue => false,
      :birthday_party_description => "MyText",
      :birthday_party_website_url => "Birthday Party Website Url",
      :birthday_party_phone => 4
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(/Category/)
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Image/)
    expect(rendered).to match(/Website Url/)
    expect(rendered).to match(/Address One/)
    expect(rendered).to match(/Address Two/)
    expect(rendered).to match(/City/)
    expect(rendered).to match(/State/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/Birthday Party Website Url/)
    expect(rendered).to match(/4/)
  end
end
