class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc)

    if params[:query].present?
      @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%")
    end

    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'movies/list', locals: { movies: @movies }, formats: [:html] }
      # format.pdf { render pdf_file....}
    end
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)

    respond_to do |format|
      format.html { redirect_to movies_path }
      # if @movie.valid?
        format.text { render partial: 'movies/movie_infos', locals: { movie: @movie }, formats: [:html] }
      # else

      # end
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end
