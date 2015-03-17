# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150313201239) do

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "admins", ["email"], name: "index_admins_on_email", unique: true, using: :btree
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree

  create_table "venues", force: :cascade do |t|
    t.integer  "facebook_id",                limit: 4
    t.integer  "limit",                      limit: 4
    t.string   "category",                   limit: 255
    t.string   "name",                       limit: 255
    t.string   "image",                      limit: 255
    t.text     "website_url",                limit: 65535
    t.string   "address_one",                limit: 255
    t.string   "address_two",                limit: 255
    t.string   "city",                       limit: 255
    t.string   "state",                      limit: 255
    t.integer  "zip",                        limit: 4
    t.integer  "phone_number",               limit: 4
    t.string   "short_description",          limit: 255
    t.text     "long_description",           limit: 65535
    t.text     "facebook",                   limit: 65535
    t.text     "twitter",                    limit: 65535
    t.boolean  "birthday_party_venue",       limit: 1
    t.text     "birthday_party_description", limit: 65535
    t.text     "birthday_party_website_url", limit: 65535
    t.integer  "birthday_party_phone",       limit: 4
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
  end

end
