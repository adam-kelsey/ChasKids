require 'rails_helper'

RSpec.describe "venues/index", type: :view do
  before(:each) do
    assign(:venues, [
      Venue.create!(
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
      ),
      Venue.create!(
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
      )
    ])
  end

  it "renders a list of venues" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Category".to_s, :count => 2
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Image".to_s, :count => 2
    assert_select "tr>td", :text => "Website Url".to_s, :count => 2
    assert_select "tr>td", :text => "Address One".to_s, :count => 2
    assert_select "tr>td", :text => "Address Two".to_s, :count => 2
    assert_select "tr>td", :text => "City".to_s, :count => 2
    assert_select "tr>td", :text => "State".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "Birthday Party Website Url".to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
  end
end
