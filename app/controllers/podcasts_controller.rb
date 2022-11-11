class PodcastsController < ApplicationController
    get "/podcasts" do
      Podcast.all.to_json(include: {
        tasks: { only: [:to_do, :todo_status] } } )
    end

    get "/podcasts/:id" do
        podcast = Podcast.find_by_id(params["id"])
        podcast.to_json(include: {
            tasks: { only: [:id, :to_do, :todo_status] } } )
    end

    post "/podcasts" do
        podcast = Podcast.new(params)
        if podcast.save
            #return object as json if saved
            podcast.to_json
        else
            #return error message if not saved
            { errors: podcast.errors.full_messages }.to_json
        end   
    end

    patch "/podcasts/:id" do
        podcast = Podcast.find_by_id(params["id"])
        if podcast.update(params)
            podcast.to_json
        else
            { errors: podcast.errors.full_messages }.to_json
        end
    end

    delete "/podcasts/:id" do
        podcast = Podcast.find_by_id(params["id"])
        if podcast
            podcast.destroy
            podcast.to_json
        else
            { errors: ["Podcast Doesn't Exist"] }.to_json
        end
    end


end