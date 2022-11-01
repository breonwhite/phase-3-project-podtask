class ListsController < ApplicationController
   get "/lists" do
    List.all.to_json(include: {
        podcast: { only: [:topic, :description, :guest, :release_date], include: {
            tasks: { only: [:to_do, :todo_status] }
        } } })
   end




end