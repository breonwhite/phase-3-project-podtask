class ListsController < ApplicationController
   
    get "/lists" do
    List.all.to_json(include: {
        podcast: { only: [:topic, :description, :guest, :release_date], include: {
            tasks: { only: [:to_do, :todo_status] }
        } } })
   end

    get "/lists/:id" do
        list = List.find_by_id(params["id"])
        List.to_json
    end

    post "/lists" do
        list = List.new(params)
        if list.save
            #return object as json if saved
            list.to_json
        else
            #return error message if not saved
            { errors: list.errors.full_messages }.to_json
        end   
    end

    patch "/lists/:id" do
        list = List.find_by_id(params["id"])
        if list.update(params)
            list.to_json
        else
            { errors: list.errors.full_messages }.to_json
        end
    end

    delete "/lists/:id" do
        list = List.find_by_id(params["id"])
        if list
            list.destroy
            list.to_json
        else
            { errors: ["List Doesn't Exist"] }.to_json
        end
    end




end