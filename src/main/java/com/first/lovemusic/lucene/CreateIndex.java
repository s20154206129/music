package com.first.lovemusic.lucene;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.cn.smart.SmartChineseAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.queryparser.classic.MultiFieldQueryParser;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

import com.first.lovemusic.model.Album;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.Singer;
import com.first.lovemusic.model.Team;
/**
 * 创建索引
 * @author 0000
 *
 */
public class CreateIndex {
	//索引存储地方
	private  static  final  String RootPath="D:/index/loveMusic/";
	
	private List<Music> list;
	private Analyzer analyzer = new SmartChineseAnalyzer();
	private Directory directory;
	private IndexWriter iwriter;
	private Query query;

	public void addIndex(Music music) throws IOException {
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		directory = FSDirectory.open(new File(RootPath).toPath());
		iwriter = new IndexWriter(directory, config);
		try {
			Document doc = new Document();
			//增加索引
 			doc.add(new Field("musicId", music.getMusicId()+"", TextField.TYPE_STORED));
			doc.add(new Field("musicName", music.getMusicName(), TextField.TYPE_STORED));
			doc.add(new Field("musicTime", music.getMusicTime(), TextField.TYPE_STORED));
			doc.add(new Field("musicSource", music.getMusicSource(), TextField.TYPE_STORED));
			doc.add(new Field("musicType", music.getMusicType(), TextField.TYPE_STORED));
			
			doc.add(new Field("singerId", music.getSinger().getSingerId()+"", TextField.TYPE_STORED));
			doc.add(new Field("singerName", music.getSinger().getSingerName(), TextField.TYPE_STORED));
			
			
			doc.add(new Field("albumId", music.getAlbum().getAlbumId()+"", TextField.TYPE_STORED));
			doc.add(new Field("albumName", music.getAlbum().getAlbumName(), TextField.TYPE_STORED));
			doc.add(new Field("teamId", music.getTeam().getTeamId()+"", TextField.TYPE_STORED));
			doc.add(new Field("teamName", music.getTeam().getTeamName(), TextField.TYPE_STORED));
			iwriter.addDocument(doc);
		} catch (Exception e) {
			e.printStackTrace();
			iwriter.close();
			directory.close();
		} finally {
			iwriter.close();
			directory.close();
		}
	}
	public void deleteAll() throws IOException {
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		directory = FSDirectory.open(new File(RootPath).toPath());
		iwriter = new IndexWriter(directory, config);
		iwriter.deleteAll();
		iwriter.close();
		directory.close();
	}
	public void deleteById(int  id) throws IOException, ParseException {
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		directory = FSDirectory.open(new File(RootPath).toPath());
		iwriter = new IndexWriter(directory, config);
		//第一个参数为解析  搜索的字段  前面加入的索引
		QueryParser parser = new QueryParser("musicId", analyzer);
		Query query = parser.parse(id + "");   //解析输入数据
		iwriter.deleteDocuments(query);
		iwriter.close();
		directory.close();
	}

	// 根据索引查询    建立索引之后才能  查询  不能报异常
	public List<Music> getDocSearchList(String key) throws IOException, ParseException {
		list = new ArrayList<Music>();
		directory = FSDirectory.open(new File(RootPath).toPath());
		DirectoryReader ireader = DirectoryReader.open(directory);
		IndexSearcher isearcher = new IndexSearcher(ireader);
		
		//这里是通过哪些方面  进行检索  
		String[] fields = { "musicName", "musicType", "singerName", "albumName" ,"teamName"};
		MultiFieldQueryParser parser = new MultiFieldQueryParser(fields, analyzer);
		query = parser.parse(key);
		@SuppressWarnings("deprecation")
		ScoreDoc[] hits = isearcher.search(query, null, 20).scoreDocs;// searchAfter(page*10,
		
	
		// Iterate through the results:
		Document hitDoc = null;
		Music music;
		//查询结果
		for (int i = 0; i < hits.length; i++) {
			music = new Music();
			hitDoc = isearcher.doc(hits[i].doc);
			music.setMusicName(hitDoc.get("musicName"));
			music.setMusicTime(hitDoc.get("musicTime"));
			
			Singer  singer=new  Singer();
			singer.setSingerName(hitDoc.get("singerName"));
			singer.setSingerId(Integer.parseInt(hitDoc.get("singerId")));
			music.setSinger(singer);
			
			Album   album=new Album();
			album.setAlbumId(Integer.parseInt(hitDoc.get("albumId")));
			album.setAlbumName(hitDoc.get("albumName"));
			music.setAlbum(album);
			
			Team  team=new  Team();
			team.setTeamId(Integer.parseInt(hitDoc.get("teamId")));
			team.setTeamName(hitDoc.get("teamName"));
			music.setTeam(team);
			list.add(music);
		}
		ireader.close();
		directory.close();
		return list;
	}

}
