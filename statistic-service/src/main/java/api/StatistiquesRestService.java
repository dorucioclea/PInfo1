package api;
import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import domain.model.Statistiques;
import domain.service.StatistiquesService;


@ApplicationScoped
@Transactional
@Path("/")
public class StatistiquesRestService {
	@Inject 
	private StatistiquesService statsService;
	
	public void setItemservice(StatistiquesService serv) {
		statsService = serv;
	}
	
	@GET
	@Path("/userstats")
	@Produces("text/plain")
	public String getUserBySearch(	@DefaultValue("") 		@QueryParam("name")String name) {
		Statistiques stats = statsService.getUserStats(name);
		return stats.toString();
		
	}
	
	@GET
	@Path("/itemstats")
	@Produces("text/plain")
	public String getItemBySearch(	@DefaultValue("") 		@QueryParam("name")String name) {
		Statistiques stats = statsService.getItemStats(name);
		return stats.toString();
		
	}
		
	
	@GET
	@Path("/allstats")
	@Produces("text/plain")
	public String getAll() {
		List<Statistiques> all = statsService.getAll();
		return all.toString();
	}
	
	@GET
	@Path("/addstats")
	@Produces("text/plain")
	public String addStats() {
		statsService.addStatistiques();
		return "inserted";
	}
	
}